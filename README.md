# Demo Hit Counter

![hit-counter.png]

 This CDK example builds a basic Hello World hit counter for demonstration purpose.

 Usage: Clone the app, ensure you have proper IAM credentials (access key/ secret key) setup using `aws configure`.  Ensure the appropriate region is selected.

 1. Change to the project directory
 2. Run `npm run build`
 3. Run `cdk deploy`

 When finished, the output of the deployment will be 2 urls, one for the hit counter, one for the tableviewer.

 Test the functionality:

 `curl -i https://xxxxxxxxx.execute-api.YOUR-REGION.amazonaws.com/prod/`
 `curl -i https://xxxxxxxxx.execute-api.YOUR-REGION.amazonaws.com/prod/hello`
 `curl -i https://xxxxxxxxx.execute-api.YOUR-REGION.amazonaws.com/prod/hello/world`

(note, you can append any querystring you like)

When finshed creating some data for the able, open the table viewer in a browser to view the data now stored in DynamoDB:

`https://yyyyyyyyyy.execute-api.YOUR-REGION.amazonaws.com/prod/`

When finished, in the root project directory:
`cdk destroy`



