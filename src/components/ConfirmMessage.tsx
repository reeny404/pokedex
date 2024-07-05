function ConfirmMessage({ onClick }: { onClick: () => void }) {
  return (
    <div className="w-full flex justify-end text-3xl relative bottom-52 ">
      <div
        onClick={onClick}
        className="px-6 py-4 mr-8 bg-white border-double border-4 border-gray-950 rounded-lg"
      >
        <div className="hover:underline cursor-pointer mb-2 ">네</div>
        <div className="hover:underline cursor-pointer">완료-☆</div>
      </div>
    </div>
  );
}

export default ConfirmMessage;
