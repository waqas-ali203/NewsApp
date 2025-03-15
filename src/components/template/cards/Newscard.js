// import Link from "next/link";

export default function NewsCard({ article }) {
  return (
    <div className="max-w-md bg-white shadow-md shadow-gray-700 mt-3 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-98 hover:shadow-lg hover:shadow-gray-700">
      <img
       
        alt={article.title}
        width={400} src={article.image ? article.image : '/assets/images/breaking-news.jpg'}
        height={250}
        className="w-full h-48 object-cover" 
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm mb-3">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        
            <a href={article.url}  target="_blank"  className="mt-10 inline-block bg-blue-600 text-white px-4 py-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
            Read More →
            </a>
      </div>
    </div>
  );
}