# Demo Hit Counter

![](hit-counter.png)

 This CDK example builds a basic Hello World hit counter for demonstration purpose.

 Usage: Clone the app, ensure you have proper IAM credentials (access key/ secret key) setup using `aws configure`.  Ensure the appropriate region is selected.

 1. Change to the project directory
 2. Run `npm install`
 3. Run `npm update`
 4. Run `npm run build`
 5. Run `cdk bootstrap` 
 6. Run `cdk deploy`

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

The entry point for the CDK application resides in `bin/api-crud-workshop.ts`.  From there, a new stack is created in `lib\api-crud-workshop-stack.ts`.  That stack uses `lib\hitcounter.ts` to define the dynamodb table.  The code that resides in the Lambdas themselves live in `lambda` in the root of the project. 





