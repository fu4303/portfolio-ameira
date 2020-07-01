import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug }) {
  const image = (
    <img
      src={`${process.env.BACKEND_URL}${src}`}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`${process.env.BACKEND_URL}/posts/${slug}`} href={`${process.env.BACKEND_URL}/posts/[slug]`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
