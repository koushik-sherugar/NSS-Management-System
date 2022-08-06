/* This example requires Tailwind CSS v2.0+ */
export default function Cta() {
  return (
    <>
      <div class="bg-white h-screen flex items-center justify-center p-12 py-6">
        <div class="mx-auto w-full max-w-screen-lg bg-indigo-800 px-5 py-10">
          <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div class="flex justify-center md:justify-end">
              <img
                class="w-full max-w-sm"
                src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png"
                alt="Marketing newsletter via computer Illustration in PNG, SVG"
              />
            </div>
            <div class="flex items-center">
              <div class="mx-auto md:mx-0">
                <h3 class="text-4xl font-bold text-white">Subscribe</h3>
                <p class="mt-2 max-w-[20rem] text-lg text-white/80">
                  Join our newsletter, You'll also receive latest news from us.
                </p>
                <form action="" class="mt-4 flex flex-col">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:text-white/50 md:max-w-[18rem]"
                  />
                  <button
                    type="submit"
                    class="mt-4 w-full max-w-[14rem] rounded bg-white/30 px-14 py-2 text-center text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-800">
              Be the member of NSS today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/redirect"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 no-underline"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
