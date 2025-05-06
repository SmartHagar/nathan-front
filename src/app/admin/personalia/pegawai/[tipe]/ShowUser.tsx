/** @format */
"use client";
import ModalDefault from "@/components/modal/ModalDefault";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  rowData: any;
};

const ShowUser = ({ showModal, setShowModal, rowData }: Props) => {
  return (
    <ModalDefault
      title={`${rowData?.nama}`}
      showModal={showModal}
      setShowModal={setShowModal}
      width="500px"
    >
      <table>
        <tr>
          <td>Email</td>
          <td className="px-2">:</td>
          <td>{rowData?.user?.email}</td>
        </tr>
        <tr>
          <td>Password</td>
          <td className="px-2">:</td>
          <td>{rowData?.user?.show_password}</td>
        </tr>
      </table>
    </ModalDefault>
  );
};

export default ShowUser;
