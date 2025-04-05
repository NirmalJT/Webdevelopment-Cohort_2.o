import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.storage = new this.Storage(this.client);
  }
  //CURD operations
  //Create

  async createPost({ title, content, slug, status, userId, featuredImage }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          userId,
          featuredImage,
        }
      );
    } catch (error) {
      console.log(`Appwrite service::createPost::error::${error}`);
    }
  }
  //update
  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug,
        { title, content, status, featuredImage }
      );
    } catch (error) {
      console.log(`Appwrite Service :: updatePost :: error :: ${error}`);
    }
  }
  //Delete
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`Appwrite Service :: deletePost :: error :: ${error}`);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPost :: error :: ${error}`);
    }
  }
  async getPosts({ queries = [Query.equal("status", "active")] }) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`Appwrite Service :: getPosts :: error :: ${error} `);
    }
  }
  //File uploading
  //Upload File
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`Appwrite Service :: uploadFiles :: error :: ${error} `);
      return false;
    }
  }
  //Delete File
  async deleteFile(fileId) {
    try {
      return this.storage.deleteFile(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log(`Appwrite Service :: deleteFile :: error :: ${error}`);
      return false;
    }
  }
  async getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log(`Appwrite Service :: getGilePreview :: error :: ${error} `);
    }
  }
}
const service = new Service();
export default service;
