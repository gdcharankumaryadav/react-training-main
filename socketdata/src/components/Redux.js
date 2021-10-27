import React, { useEffect } from "react";
import CommentDetail from "../components/CommentDetails";
import ApprovalCard from "../components/ApprovalCard";
const Redux = () => {
  useEffect(() => {});
  return (
    <div>
      <ApprovalCard>
        <CommentDetail
          time="10.15 am"
        />
      </ApprovalCard>
    </div>
  );
};
export default Redux;
