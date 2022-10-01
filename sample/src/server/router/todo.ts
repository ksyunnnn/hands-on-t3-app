import { createRouter } from "./context";
import { z } from "zod";

export const todoRouter = createRouter()
  .mutation("create",{
    input: z
    .object({
      status: z.string(),
      content: z.string(),
      userId: z.string(),
    }).required(),
    async resolve({ctx, input}) {
        return await ctx.prisma.todo.create({
            data: {
                ...input,
                createdAt: new Date()
            }
        })
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.todo.findMany();
    },
  });
