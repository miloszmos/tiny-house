import { IResolvers } from "apollo-server-express";
import { listings } from "../listing";

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return listings;
    }
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      const itemToRemove = listings.find(item => item.id === id);
      if (!itemToRemove) {
        throw new Error("Failed to delete listing");
      } else {
        listings.filter(listing => listing.id !== id);
        return itemToRemove;
      }
    }
  }
};
