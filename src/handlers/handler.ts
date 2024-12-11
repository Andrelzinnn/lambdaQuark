import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const hello = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v4.0! Your function executed successfully!',
    }),
  };
};