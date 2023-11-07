export const fetchLabelErrorsData = async () => {};

// Hardcoded data, reflects structure of data returned by the endpoint
export const mockLabelErrorsData = [
  {
    dataset: "ImageNet",
    guessed_label: "baboon",
    id: 6467,
    label: "siamang",
    mturk_info: "guessed",
    p_error: 4.05612196167431e-7,
    path: "/static/imagenet/val/n02483708/ILSVRC2012_val_00047520.JPEG",
  },
  {
    dataset: "ImageNet",
    guessed_label: "irish water spaniel",
    id: 9451,
    label: "irish wolfhound",
    mturk_info: "guessed",
    p_error: 3.28572493572303e-6,
    path: "/static/imagenet/val/n02090721/ILSVRC2012_val_00022071.JPEG",
  },
  {
    dataset: "ImageNet",
    guessed_label: "meerkat",
    id: 6706,
    label: "red panda",
    mturk_info: "both",
    p_error: 1.16091179863533e-6,
    path: "/static/imagenet/val/n02509815/ILSVRC2012_val_00023365.JPEG",
  },
  {
    dataset: "ImageNet",
    guessed_label: "organ",
    id: 10695,
    label: "rocking chair",
    mturk_info: "neither",
    p_error: 0.000473851756106099,
    path: "/static/imagenet/val/n04099969/ILSVRC2012_val_00048622.JPEG",
  },
];
