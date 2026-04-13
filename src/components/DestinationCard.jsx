import { motion } from 'framer-motion';

const DestinationCard = ({ place }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
    >
      <div className="h-80 w-full overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <span className="text-xs font-bold uppercase tracking-widest text-tunis-gold">{place.type}</span>
        <h3 className="text-2xl font-bold">{place.name}</h3>
        <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
          Explore the history of {place.name}...
        </p>
      </div>
    </motion.div>
  );
};

export default DestinationCard;