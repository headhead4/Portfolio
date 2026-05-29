// =======================================================
// Andrew Kronenberg Portfolio Projects
//
// Most portfolio updates only require changes to this file.
//
// To add a new project:
//
//   1. Add a thumbnail image to the images/ folder.
//
//   2. Add either:
//        - a GLB model to the models/ folder
//          OR
//        - a PDF document to the pdfs/ folder
//
//   3. Add a new entry to the projects array below.
//
// The portfolio homepage and project pages are
// generated automatically from this file.
//
// Project types:
//
//   Interactive 3D Model:
//
//       {
//           id: "my-model",
//           title: "My Model",
//           type: "Interactive 3D Model",
//           thumbnail: "images/my-model.webp",
//           model: "models/my-model.glb",
//           description: "..."
//       }
//
//   PDF Project:
//
//       {
//           id: "my-project",
//           title: "My Project",
//           type: "Engineering Project",
//           thumbnail: "images/my-project.webp",
//           pdf: "pdfs/my-project.pdf",
//           description: "..."
//       }
//
// Notes:
//
//   � id is the project's unique URL identifier.  Use lowercase letters and hyphens only.
//   � Projects appear on the website in the order they are listed below.
//   � Thumbnail paths are relative to the site root.
//     They are used for homepage cards and PDF project previews.
//   � Only one of "model" or "pdf" should be specified.
//
// Thumbnail guidelines:
//
//   � Match the background to the model viewer background (#242424)
//   � Keep the project centered and filling roughly 60-80% of the image.
//   � Use a consistent landscape aspect ratio, such as 800x450 pixels.
//   � WebP format is preferred when practical.
// =======================================================

const projects = [
    {
        id: "aco-kukiri",
        title: "ACO Kukiri",
        type: "Interactive 3D Model",
        thumbnail: "images/ACO_Kukiri-thumbnail.webp",
        model: "models/ACO_Kukiri.glb",
        description: "Personal 3D modeling project focused on creating a stylized kukiri-style blade for interactive web viewing."
    },
    {
        id: "chirevival",
        title: "ChiRevival Logo",
        type: "Interactive 3D Model",
        thumbnail: "images/ChiRevival-thumbnail.webp",
        model: "models/ChiRevival.glb",
        description: "3D logo model created for ChiRevival, designed for presentation, printable output, and interactive web viewing."
    },
	{
		id: "tigrix",
		title: "Tigrix Logo",
		type: "Interactive 3D Model",
		thumbnail: "images/Tigrix-thumbnail.webp",
		model: "models/Tigrix.glb",
		description: "3D logo model created for Tigrix, designed for presentation, printable output, and interactive web viewing."
    },
    {
        id: "house-design",
        title: "1000 Sq Ft House Design",
        type: "Residential Drafting Project",
        thumbnail: "images/house-thumbnail.webp",
        pdf: "pdfs/1000sqft-house.pdf",
        description: "Residential drafting project with floor plans, elevations, sections, schedules, and plumbing, electrical, and HVAC layouts."
    },
    {
        id: "lobster",
        title: "Lobster Assembly Design",
        type: "Assembly Drawing Project",
        thumbnail: "images/lobster-thumbnail.webp",
        pdf: "pdfs/lobster.pdf",
        description: "Multi-part assembly drawing with a bill of materials and PLA component specifications."
    },
    {
        id: "window-planter",
        title: "Window Planter Design",
        type: "Product Design Project",
        thumbnail: "images/planter-thumbnail.webp",
        pdf: "pdfs/window-planter.pdf",
        description: "Product design project with material selection, dimensions, hardware, and finishing specifications."
    }
];