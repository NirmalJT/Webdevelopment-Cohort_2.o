const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRIET_DATABASE_ID),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRIITE_COLLECTION_ID),
  appwriteBucketID: String(import.meta.env.VITE_APPWRIET_BUCKET_ID),
};
export default conf;
