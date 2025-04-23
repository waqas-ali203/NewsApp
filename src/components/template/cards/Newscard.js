import Link from "next/link";

export default function NewsCard({
  article,
  onFavClick = () => {},
  onFavDelete = () => {},
  showFavIcon = true,
  showDelete = false,
}) {
  return (
    <div className="w-full max-w-md bg-white shadow-md mt-4 rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[0.98] hover:shadow-lg mx-auto">
      <img
        alt={article.title}
        src={article.image ? article.image : "/assets/images/breaking-news.jpg"}
        className="w-full h-48 sm:h-52 md:h-56 object-cover"
      />
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-3">
          {article.description}
        </p>

        <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-gray-500 mb-4 gap-y-2">
          <span className="w-full sm:w-auto">{article.source.name}</span>
          <span className="w-full sm:w-auto">{new Date(article.publishedAt).toLocaleDateString()}</span>

          {showFavIcon && (
            <button onClick={onFavClick} aria-label="Add to Favourite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500 hover:text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          )}

          {showDelete && (
            <button onClick={onFavDelete} aria-label="Remove from Favourite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500 hover:text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          )}
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all w-full text-center"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
