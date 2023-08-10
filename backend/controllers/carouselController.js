import asyncHandler from '../middleware/asyncHandler.js';
import Carousel from '../models/carouselModel.js';

// @desc    Fetch all carousel items
// @route   GET /api/carousel
// @access  Public
const getCarouselItems = asyncHandler(async (req, res) => {
  const carouselItems = await Carousel.find({});
  res.json(carouselItems);
});

// @desc    Create a carousel item
// @route   POST /api/carousel
// @access  Private/Admin
const createCarouselItem = asyncHandler(async (req, res) => {
  const { image, caption, link } = req.body;

  const carouselItem = new Carousel({
    image,
    caption,
    link,
  });

  const createdCarouselItem = await carouselItem.save();
  res.status(201).json(createdCarouselItem);
});

// @desc    Update a carousel item
// @route   PUT /api/carousel/:id
// @access  Private/Admin
const updateCarouselItem = asyncHandler(async (req, res) => {
  const { image, caption, link } = req.body;

  const carouselItem = await Carousel.findById(req.params.id);

  if (carouselItem) {
    carouselItem.image = image;
    carouselItem.caption = caption;
    carouselItem.link = link;

    const updatedCarouselItem = await carouselItem.save();
    res.json(updatedCarouselItem);
  } else {
    res.status(404);
    throw new Error('Carousel item not found');
  }
});

// @desc    Delete a carousel item
// @route   DELETE /api/carousel/:id
// @access  Private/Admin
const deleteCarouselItem = asyncHandler(async (req, res) => {
  const carouselItem = await CarouselItem.findById(req.params.id);

  if (carouselItem) {
    await CarouselI.deleteOne({ _id: carouselItem._id });
    res.json({ message: 'Carousel item removed' });
  } else {
    res.status(404);
    throw new Error('Carousel item not found');
  }
});

export {
  getCarouselItems,
  createCarouselItem,
  updateCarouselItem,
  deleteCarouselItem,
};
