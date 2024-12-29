import React from "react";
import Avatar from "../common/Avatar";

function CommetCompo({ comment, isReply }) {
  console.log("comment---->", comment);
  return (
    <div className="w-full     h-fit p-[15px]">
      <div className="w-full  flex items-start gap-[5px]">
        <div className="w-[40px]  h-[40px] ">
          <div
            style={{
              zIndex: 99999,
            }}
            className=" z-50"
          >
            <Avatar name={comment.autherName} />
          </div>

          {isReply && (
            <div
              style={{
                zIndex: -99,
              }}
              className="w-full h-[1px] overflow-visible relative flex justify-center"
            >
              <div className=" w-[2px]  h-[140px] absolute bg-black top-[-150px] left-[-14px]">
                <div className=" w-full h-full relative overflow-visible">
                    <div className=" w-[20px] h-[100px] border-t-0 border-b-[2px] absolute bottom-[-0px]  border-black"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex h-full justify-between px-[12px] py-[12px] rounded-xl bg-green-900  flex-col">
          <p className=" text-gray-100 mt-[2px] font-semibold uppercase leading-none">
            {comment.autherName}
          </p>
          <p className=" text-[12px] mt-[2px] text-gray-200">
            {comment.date} {comment.time}
          </p>
          <div className="w-full ">
            <p className="text-gray-100 text-[16px]">{comment.comment}</p>
          </div>
        </div>
      </div>
      <div className=" ml-[45px] ">
        <button className=" text-black text-[12px] font-bold">Reply</button>
      </div>
      {comment.replies.length > 0 && (
        <div className=" pl-4 w-full ">
          {comment.replies.map((reply, index) => (
            <div key={index} className=" relative   ">
              <CommetCompo isReply={true} comment={reply} />
              <div className="  " />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommetCompo;