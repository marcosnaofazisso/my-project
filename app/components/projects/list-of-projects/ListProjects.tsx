import { capitalizeFirstLetter, cleanPath } from '@/app/lib/utils';
import { PATH_TO } from '@/app/routes/globalRoutes';
import SelectProjectButton from '@/app/ui/buttons/project/SelectProject';
import { useRouter } from 'next/navigation';
interface ListProjectsProps {
    filteredProjects: string[];
}

export default function ListProjects({ filteredProjects }: ListProjectsProps) {

    const router = useRouter()

    return (
        <div className='flex flex-row gap-2 flex-wrap max-w-[1400px] pt-6'>{filteredProjects?.map((project: string, index: number) => {
            return (
                <div key={project} className='w-full max-w-[200px]'>
                    <SelectProjectButton title={`${index + 1} - ${capitalizeFirstLetter(project)}`} isSelected={false} icon={null} onClick={() => router.push(`${PATH_TO.projects}/${cleanPath(project)}`)} />
                </div>
            )
        })}
        </div>
    )
}