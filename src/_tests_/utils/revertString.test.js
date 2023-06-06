import { revertString } from "../../utils/revertString";

describe("test string reverse function", () => {
   it("reversed string skywalker to be reklawyks", () => {
     const result = revertString("skywalker")
     expect(result).toBe("reklawyks");
   })
 });
