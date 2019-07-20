CREATE TABLE `linux_users` (
  `id` int(11) NOT NULL,
  `screen_name` varchar(200) NOT NULL,
  `twitter_id` bigint(20) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `description` text,
  `location` varchar(100) DEFAULT NULL,
  `followers_count` int(11) DEFAULT NULL,
  `friends_count` int(11) DEFAULT NULL,
  `favourites_count` int(11) DEFAULT NULL,
  `statuses_count` int(11) DEFAULT NULL,
  `tw_created_at` varchar(200) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `linux_users`
--
ALTER TABLE `linux_users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `linux_users`
--
ALTER TABLE `linux_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
