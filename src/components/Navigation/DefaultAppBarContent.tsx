import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HelpOutline from '@material-ui/icons/HelpOutline';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import * as classnames from 'classnames';
import { externalLinks } from 'common/constants';
import { NewTargetLink } from 'components/common/NewTargetLink';
import { useCommonStyles } from 'components/common/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'routes/routes';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        flexGrow: 1
    },
    rightNavBarItem: {
        marginLeft: theme.spacing(2)
    }
}));

/** Renders the default content for the app bar, which is the logo and help links */
export const DefaultAppBarContent: React.FC<{}> = () => {
    const commonStyles = useCommonStyles();
    const styles = useStyles();
    return (
        <>
            <Typography variant="h5" className={styles.title}>
                <Link
                    className={classnames(commonStyles.linkUnstyled)}
                    to={Routes.SelectProject.path}
                >
                    Flyte
                </Link>
            </Typography>
        </>
    );
};
