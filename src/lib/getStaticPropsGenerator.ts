import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'

import { AppStore, wrapper } from '@/store/index'

interface IBaseProps {
  [key: string]: unknown
}

type TCallbackGenerator<P> = (
  context: GetStaticPropsContext,
  store: AppStore
) => GetStaticPropsResult<P> | Promise<GetStaticPropsResult<P>>

export const getStaticPropsGenerator = <P extends IBaseProps>(cb: TCallbackGenerator<P>): GetStaticProps<P> =>
  wrapper.getStaticProps((store) => async (context) => cb(context, store))
