import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function HomeLoading() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className=" relative grid grid-cols-3 grid-rows-1 max-h-[860px] overflow-hidden h-[84vh] gap-5 items-center">
          <div className="col-span-2">
            <Skeleton className="h-[84vh]" />
          </div>
          <div className="col-span-1 flex flex-col gap-8 pr-6 max-w-[405px]">
            <div className="col-span-1  ">
              <Skeleton height={44} className="mb-3" />
              <Skeleton height={24} className="mb-1" />
              <Skeleton width={180} height={24} />
            </div>
            <Skeleton height={27} className="mb-1" />

            <div>
              <Skeleton width={180} height={24} />
              <Skeleton height={28} className="mt-2" />
            </div>
            <Skeleton height={42} className="mb-1" />
          </div>
        </div>
      </SkeletonTheme>
    </>
  )
}
