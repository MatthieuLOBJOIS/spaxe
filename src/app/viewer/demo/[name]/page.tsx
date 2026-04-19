import ViewerScreen from '@/components/workspace/ViewerScreen'

type DemoPageProps = {
  params: Promise<{ name: string }>
}

// Displays the viewer workspace for a built-in demo assembly
export default async function DemoPage({ params }: DemoPageProps) {
  const { name } = await params

  return (
    <ViewerScreen
      assemblyUrl={`/demo/${name}/assembly.json`}
      basePath={`/demo/${name}`}
    />
  )
}
