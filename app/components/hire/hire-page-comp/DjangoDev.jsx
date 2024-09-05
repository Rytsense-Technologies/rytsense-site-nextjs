import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function DjangoDev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Why Hire Django Developers from Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Correctly Chosen Team</h1>
            We ensure that your business projects go to the right hands, so we
            select very experienced and talented developers for our company.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Different Engagement Models
            </h1>
            We offer different engagement models that completely depend on your
            requirements. We work as per your needs and comfort.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Cost-Effective Prices</h1>{" "}
            Having successfully delivered the preeminent Django Development
            services at a cost-effective price guaranteeing that it doesn’t
            exceed your planned budget.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Transparent Working Methodology
            </h1>
            We keep our clients in constant communication at every level during
            project management to get all the updates regularly. This makes
            trust between our clients and developers.
          </li>
        </ul>
      </div>
    </div>
  );
}
