import CustomHead from '../components/Head'

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <CustomHead title="Not Found" />
      <h1 className="text-6xl font-sono-bold">404</h1>
      <h1 className="text-5xl font-sono-bold">Page Not Found</h1>
    </div>
  )
}
