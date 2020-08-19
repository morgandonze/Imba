import config from "../aws-exports";
import Amplify from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

function configure() {
  Amplify.configure(config);

  // Apply plugin with configuration
  Amplify.addPluggable(
    new AWSIoTProvider({
      aws_pubsub_region: "us-east-1",
      aws_pubsub_endpoint:
        "wss://a3gy3b4v65p14p-ats.iot.us-east-1.amazonaws.com/mqtt",
    })
  );
  // Auth.currentCredentials().then((info) => {
  //   // const cognitoIdentityId = info.data.IdentityId;
  //   // console.log(info);
  // });
}

export default configure;
