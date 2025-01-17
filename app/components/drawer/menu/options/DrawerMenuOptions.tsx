import { useStoreUser } from '@/app/data/user/storeUser';
import { isOptionSelected } from '@/app/lib/utils';
import { PATH_TO } from '@/app/routes/globalRoutes';
import DrawerButton from '@/app/ui/buttons/drawer/DrawerButton';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { usePathname, useRouter } from 'next/navigation';

export default function DrawerMenuOptions() {

    const router = useRouter()
    const pathname = usePathname()
    const { projects } = useStoreUser()

    return (
        <div>{projects.map((option: string) => {
            return (
                <div key={option}>
                    <DrawerButton
                        title={option}
                        icon={<DescriptionOutlinedIcon />}
                        isSelected={isOptionSelected(pathname, option)}
                        onClick={() => router.push(`${PATH_TO.projects}/${option}`)}
                    />
                </div>
            )
        })}</div>
    )
}