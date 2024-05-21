import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/router'

export default function Pagination({ products }) {
  const router = useRouter()
  return (
    <>
      <ul className={styles['pagination']}>
        <li>
          {products.page === 1 ? (
            <div className={styles['page-disable']} href={'/shop/product/list'}>
              PREV
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault()
                router.push(
                  {
                    pathname: '/shop/product/list',
                    query: { ...router.query, page: products.page - 1 },
                  },
                  undefined,
                  { scroll: false }
                )
              }}
              className={styles['pagination-prev']}
            >
              PREV
            </button>
          )}
        </li>
        {products.success && products.totalPages
          ? Array(7)
              .fill(1)
              .map((v, i) => {
                const p = products.page - 3 + i
                if (p < 1 || p > products.totalPages) return null
                return (
                  <li key={p} className="hidden md:flex">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(
                          {
                            pathname: '/shop/product/list',
                            query: {
                              ...router.query,
                              page: p,
                            },
                          },
                          undefined,
                          { scroll: false }
                        )
                      }}
                      className={
                        p === products.page
                          ? styles['pagination-link-active']
                          : styles['pagination-link']
                      }
                    >
                      {p}
                    </button>
                  </li>
                )
              })
          : null}
        {products.success && products.totalPages
          ? Array(4)
              .fill(1)
              .map((v, i) => {
                const p = products.page - 2 + i
                if (p < 1 || p > products.totalPages) return null
                return (
                  <li key={p} className="flex md:hidden">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(
                          {
                            pathname: '/shop/product/list',
                            query: {
                              ...router.query,
                              page: p,
                            },
                          },
                          undefined,
                          { scroll: false }
                        )
                      }}
                      className={
                        p === products.page
                          ? styles['pagination-link-active']
                          : styles['pagination-link']
                      }
                    >
                      {p}
                    </button>
                  </li>
                )
              })
          : null}
        <li>
          {products.page === products.totalPages ? (
            <div
              className={styles['page-disable']}
              href={'/shop/product/list' + `?page=${products.totalPages}`}
            >
              NEXT
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault()
                router.push(
                  {
                    pathname: '/shop/product/list',
                    query: { ...router.query, page: products.page + 1 },
                  },
                  undefined,
                  { scroll: false }
                )
              }}
              className={styles['pagination-next']}
            >
              NEXT
            </button>
          )}
        </li>
      </ul>
    </>
  )
}
