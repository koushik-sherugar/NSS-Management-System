/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
  UserGroupIcon,
  DatabaseIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "24x7 Service",
    description:
      "We provide registration and data management services for all students, colleges as higher officials at any instance of time.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Online registration",
    description:
      "Registration facility is provided to the students as well as staff to get the services provided by the software.",
    icon: UserGroupIcon,
  },
  {
    name: "Activities Details",
    description:
      "The details about various activities held in a college can be sent to the admin as well as the students .",
    icon: CalendarIcon,
  },

  {
    name: "Easy data management",
    description:
      "With the help of our software large amount of data in the nss can be managed",
    icon: DatabaseIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-800 font-semibold tracking-wide uppercase">
            Benifits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What makes us better?{" "}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            These are the services that we provide for the students, colleges
            and higher authorities through our software.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-800 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
