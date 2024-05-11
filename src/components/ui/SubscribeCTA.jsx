const SubscribeCTA = ({ text }) => (
  <div className="mt-4 pb-2 sm:pb-5">
    <div className="">
      <div className="rounded-lg bg-primary p-2 shadow-lg sm:p-3">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <p className="ml-3 font-medium text-white">
              <span>{text}</span>
            </p>
          </div>
          <div className="order-3 my-3 ml-3 w-full flex-shrink-0 sm:order-2 sm:w-auto">
            <a
              href="/app/subscription"
              className="rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary"
            >
              Subscribe Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SubscribeCTA
