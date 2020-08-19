import { API, graphqlOperation } from "aws-amplify";
import { createEndeavor } from "../graphql/mutations";

async function CreateEndeavor(state: any, dispatch: any) {
  const endeavor = {
    title: "Endeavor 86",
    description: "",
    momentum: 1,
    clientId: state.clientId,
  };

  try {
    const updatedEndeavorsArray = [...state.endeavors, endeavor];
    dispatch({
      type: "set",
      endeavors: updatedEndeavorsArray,
    });
  } catch (err) {
    console.log(err);
  }

  try {
    await API.graphql(
      graphqlOperation(createEndeavor, {
        input: endeavor,
      })
    );
  } catch (err) {
    console.log("error creating endeavors...", err);
  }
}

export default CreateEndeavor;
