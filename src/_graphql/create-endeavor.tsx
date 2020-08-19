import { API, graphqlOperation } from "aws-amplify";
import { createEndeavor } from "../graphql/mutations";

async function CreateEndeavor(state: any, dispatch: any) {
  const endeavor = {
    title: state.title,
    description: "",
    momentum: 1,
    clientId: state.clientId,
  };

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
