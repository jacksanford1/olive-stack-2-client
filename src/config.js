const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-10xc7qtcc3i6t"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2rowf838d4.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fqmAsyFmg",
    APP_CLIENT_ID: "35d9hocqtu1k19ad4bej0k016a",
    IDENTITY_POOL_ID: "us-east-1:e24f3129-200d-4767-8f02-036df5deb5d7"
  }
  STRIPE_KEY: "pk_test_Pd7AqcCG8Or017EospWaUDXp004D5MLWq9",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1mcowzhm79vkb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vmbnp4ncqj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Yblgbe9PY",
    APP_CLIENT_ID: "2q5ulkmc5q1kr13u58niklba73",
    IDENTITY_POOL_ID: "us-east-1:a88370d9-53f8-4c11-8de1-788a6b797ded"
  }
  STRIPE_KEY: "pk_test_Pd7AqcCG8Or017EospWaUDXp004D5MLWq9",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
