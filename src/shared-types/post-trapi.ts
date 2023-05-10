import { PostProps } from "@/components/Post";
import { PostTag } from "./tags";

export type PostTrapi = PostProps &{
    tags:PostTag[],
    slug:string
}
  