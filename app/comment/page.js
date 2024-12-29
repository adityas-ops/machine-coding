"use client";
import Layout from "@/components/common/Layout";
import React, { useState } from "react";
import commentData from "@/data/commentData";
import CommentCompo from "@/components/comments/CommetCompo"

function Comment() {
  const [comments, setComments] = useState(commentData);
  console.log(comments)
  return (
    <Layout customClass="pt-[20px] flex justify-center px-[50px]">
      <div className="w-[60%]  h-full">
        {
            comments.map((comment, index) => (
                <CommentCompo key={index} isReply={false} comment={comment} />
            ))
        }
      </div>
    </Layout>
  );
}

export default Comment;
