import { createRouter } from "./context";
import { z } from "zod";

export const todoRouter = createRouter()
  .mutation("add",{
    async resolve({ctx}){
      ctx.prisma.example.create({
        data: {}
      })
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
