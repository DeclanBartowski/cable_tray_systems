import type { LayoutData, LayoutDto, LayoutLink } from '~/types/layout'

export const useLayout = () => {
  const { $api } = useNuxtApp()

  const layout = useState<LayoutDto | null>('layout', () => null)
  const layoutLink = useState<LayoutLink[] | null>('layout-link', () => null)

  const getLayout = async (): Promise<void> => {
    const response = await $api<LayoutDto>('getMain', {
      method: "GET",
    })
    if (response) {
      layout.value = response
      layoutLink.value = response.data.menuHeader
    }
  }

  return { layout, layoutLink, getLayout }
}
