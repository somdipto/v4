import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priyanka Sharma",
    comment: "Best salon in Noida. I got my hair cut and color done from here. The staff is very professional and friendly. Highly recommended!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocLHGJ_9r8KKQZv_hh8_RZ7kKGcavKIeqJ9FtNQv=w60-h60-p-rp-mo-br100",
    role: "Regular Client",
  },
  {
    name: "Shweta Srivastava",
    comment: "Amazing experience at AVL salon. Very professional staff and hygienic environment. Got my hair treatment done from here. Loved the service.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocILiPmyP_RJ_tA7e4g1BvXJp6WxL_-6rZ8_vwzv=w60-h60-p-rp-mo-br100",
    role: "Verified Customer",
  },
  {
    name: "Ritu Singh",
    comment: "Great experience at AVL salon. The staff is very professional and courteous. The ambience is very good and they maintain proper hygiene. Highly recommended for all beauty services.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocJHXB_QW_8HhR8N_JLrHXVlHAlvH_J8_cJcVr_K=w60-h60-p-rp-mo-br100",
    role: "Loyal Customer",
  },
  {
    name: "Neha Gupta",
    comment: "Best salon in the area. Very professional staff and great service. Got my facial and hair spa done. Totally satisfied with the service.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocKXB_8HhR8N_JLrHXVlHAlvH_J8_cJcVr_K=w60-h60-p-rp-mo-br100",
    role: "Regular Client",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Real experiences from our valued customers</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg mx-2 h-full border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.comment}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Testimonials;