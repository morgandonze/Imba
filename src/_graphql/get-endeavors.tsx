// https://youtu.be/VQ-umMTEQq4?t=1580

import { API, graphqlOperation } from "aws-amplify";
import { listEndeavors } from "../graphql/queries";

// https://github.com/dabit3/aws-appsync-react-workshop/blob/with-testing/AppWithHooks.js
async function getEndeavors(dispatch: (state: any) => null) {
  try {
    const endeavorData: any = await API.graphql(
      graphqlOperation(listEndeavors)
    );
    dispatch({
      type: "set",
      endeavors: endeavorData.data.listEndeavors.items,
    });
  } catch (err) {
    dispatch({ type: "error" });
    console.log("error fetching endeavors...", err);
  }
}

export default getEndeavors;
