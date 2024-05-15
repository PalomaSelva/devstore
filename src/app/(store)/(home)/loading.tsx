import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function HomeLoading() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="grid max-h-[860px] h-[82vh] grid-col-9 grid-rows-6 grid-flow-col gap-4 ">
          <div className="row-span-6 col-span-6">
            <Skeleton className="h-full" />
          </div>
          <div className="col-span-3 row-span-3 ">
            <Skeleton className="h-full" />
          </div>
          <div className="row-span-3 col-span-3 ">
            <Skeleton className="h-full" />
          </div>
        </div>
      </SkeletonTheme>
    </>
  )
}
