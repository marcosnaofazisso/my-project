import { useStoreUser } from '@/app/data/user/storeUser'
import { cleanPath } from '@/app/lib/utils'
import { PATH_TO } from '@/app/routes/globalRoutes'
import SelectProjectButton from '@/app/ui/buttons/SelectProject'
import { useRouter } from 'next/navigation'

export default function ListProjects() {

    const router = useRouter()
    const { projects } = useStoreUser()

    return (
        <div className='flex flex-row gap-2'>{projects?.map((project, index) => {
            return (
                <div key={project} className='w-full max-w-[200px]'>
                    <SelectProjectButton title={`${index + 1} - ${project}`} isSelected={false} icon={null} onClick={() => router.push(`${PATH_TO.projects}/${cleanPath(project)}`)} />
                </div>
            )
        })}
        </div>
    )
}