import { Spinner } from "@chakra-ui/react";
import "./PageLoading.scss";

export default function PageLoading() {
  return (
    <div className="page-loading">
      <Spinner size="xl" color="gray" />
    </div>
  )
}
