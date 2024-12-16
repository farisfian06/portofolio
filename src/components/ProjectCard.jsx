import React from "react";

const ProjectCard = ({ prjImg }) => {
  return (
    <div className="bg-gray-800 min-w-[20rem] h-full rounded-3xl overflow-hidden">
      <img
        className="w-full h-20 max-h-[25%] relative top-0"
        src={prjImg}
        alt="Project image"
      />
      <div className="p-8">
        <h3 className="text-primaryOrange-0 font-primaryRegular">
          Judul project
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem quia amet magnam voluptate nihil fuga temporibus
          explicabo voluptates hic saepe! Qui, molestias unde voluptate sint
          quae dignissimos enim ipsa est quo earum atque accusamus at cum non
          quisquam a natus reprehenderit, neque asperiores ea eum? Quaerat illum
          cumque, quo quasi delectus nobis error maxime aut placeat ex ratione
          doloremque molestias autem dolores ut illo? Corporis repellat quis
          maiores, quisquam quos perspiciatis qui minus tempora sapiente
          blanditiis ad, et, omnis vel quidem distinctio! Dolor, illo. Dolor
          laudantium velit excepturi aut et! Quos corporis beatae dolorum
          suscipit blanditiis porro repudiandae minus cumque.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
