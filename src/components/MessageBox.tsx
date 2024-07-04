import { PropsWithChildren } from "react";

type MessageBoxProps = {
  onClick?: () => void;
} & PropsWithChildren;

function MessageBox({ children, onClick }: MessageBoxProps) {
  return (
    <div
      className="w-full min-h-44 py-8 px-12 rounded border-double border-4 border-gray-900 font-semibold text-4xl"
      onClick={onClick}
    >
      {children}
      <span className="animate-ping text-[1.25rem] pl-2 opacity-70">▼</span>
    </div>
  );
}

export default MessageBox;
