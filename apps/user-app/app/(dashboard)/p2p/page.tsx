import { SendCard } from "../../../components/SendCard";

export default function () {
  return (
    <div className="w-screen">
      <div className="text-4xl text-green-500 pt-8 mb-8 font-bold">
        P2P Transfers
      </div>
      <div className="w-full">
        <SendCard />
      </div>
    </div>
  );
}
