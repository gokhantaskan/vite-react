export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-2 border-gray-300 rounded-full animate-spin" />
        <div className="text-gray-500">Loading...</div>
      </div>
    </div>
  );
}
