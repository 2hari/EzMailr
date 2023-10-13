export default function Loading() {
  return (
    <div className="flex h-40 w-full items-center justify-around">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#3BC3D3] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.8s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}