// Create a DocumentClient that represents the query to add an item
import DynamoDB from 'aws-sdk/clients/dynamodb';
import CustomDynamoClient from './dynamodb';
// Declare some custom client just to illustrate how TS will include only used files into lambda distribution
export default class User {
    db: CustomDynamoClient;
    table: String;
    secret_key: String; 
 
    constructor() {
        this.db = new CustomDynamoClient('user')
        this.table = "user";
        this.secret_key = "125fd9b8d992505f403889991923eb76e9e1ae5a6ea38f46588a40399667631e";
    }

    async login(email, password) {
        // try {
        //   const data  = await this.db.queryUserByEmail(email);
        //   const user = data[0];
          
        //   if (!user) {
        //     return { statusCode: 401, body: JSON.stringify({ message: 'Invalid credentials' }) };
        //   }
        //   const isMatch = await this.verifyPassword(user,password);
        //   if (!isMatch) {
        //     return { statusCode: 401, body: JSON.stringify({ message: 'Invalid credentials' }) };
        //   }
    
        //   const token = jwt.sign({ userId: user.uuid }, this.secret_key, { expiresIn: '1h' });
        //   return { statusCode: 200, body: JSON.stringify({ token }) };
        // } catch (err) {
        //   console.error('Error logging in:', err);
        //   return { statusCode: 500, body: JSON.stringify({ message: 'Error logging in' }) };
        // }
      }
    

}
