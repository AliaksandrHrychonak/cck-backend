import AppConfig from 'src/config/app.config';
import DatabaseConfig from 'src/config/database.config';
import AuthConfig from './auth.config';
import AwsConfig from './aws.config';
import HelperConfig from './helper.config';
import MiddlewareConfig from './middleware.config';

export default [
    AppConfig,
    DatabaseConfig,
    HelperConfig,
    AwsConfig,
    MiddlewareConfig,
    AuthConfig
];
