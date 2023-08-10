import mongoose from 'mongoose';

const carouselSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Carousel = mongoose.model('Carousel', carouselSchema);

export default Carousel;
