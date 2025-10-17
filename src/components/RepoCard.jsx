export default function Card({ name, image, title, price, }) {

return (
<div className="flex flex-col items-center p-6 w-48 rounded-lg shadow-md bg-white hover:shadow-lg transition">
<img src={image}/>
<h3 className="font-bold text-lg">{name}</h3>
<h3 className="text-lg font-semibold text-black">{title}</h3>
<p className="text-gray-400 mt-2">{price}</p>

</div>

);

}